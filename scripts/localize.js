const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') }); // Next.js standard
// In case they just use .env
if (!process.env.GEMINI_API_KEY) {
  require('dotenv').config();
}

const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const EN_DIR = path.join(__dirname, '../src/locales/en');
const PT_DIR = path.join(__dirname, '../src/locales/pt');

// Deep merge helper that finds missing keys
function findMissingKeys(source, target) {
  const missing = {};
  for (const k in source) {
    if (typeof source[k] === 'object' && source[k] !== null) {
      if (!target[k]) target[k] = {};
      const nestedMissing = findMissingKeys(source[k], target[k]);
      if (Object.keys(nestedMissing).length > 0) {
        missing[k] = nestedMissing;
      }
    } else {
      if (!target[k]) {
        missing[k] = source[k];
      }
    }
  }
  return missing;
}

// Deep apply helper
function applyTranslations(target, generated) {
  for (const k in generated) {
    if (typeof generated[k] === 'object' && generated[k] !== null) {
      if (!target[k]) target[k] = {};
      applyTranslations(target[k], generated[k]);
    } else {
      target[k] = generated[k];
    }
  }
}

async function run() {
  if (!process.env.GEMINI_API_KEY) {
    console.error('❌ Error: GEMINI_API_KEY is missing in your .env or .env.local file.');
    console.error('Please get an API key from https://aistudio.google.com/ and add it to .env.local');
    process.exit(1);
  }

  console.log('🔄 Checking all JSON locales in folders...');
  const enFiles = fs.readdirSync(EN_DIR).filter(f => f.endsWith('.json'));
  let totalMissingFiles = 0;

  for (const file of enFiles) {
    const enFilePath = path.join(EN_DIR, file);
    const ptFilePath = path.join(PT_DIR, file);

    const enData = JSON.parse(fs.readFileSync(enFilePath, 'utf-8'));
    
    let ptData = {};
    if (fs.existsSync(ptFilePath)) {
      ptData = JSON.parse(fs.readFileSync(ptFilePath, 'utf-8'));
    }

    const missingKeys = findMissingKeys(enData, ptData);

    if (Object.keys(missingKeys).length === 0) {
      console.log(`✅ ${file}: All keys are up to date!`);
      continue;
    }

    totalMissingFiles++;
    console.log(`📝 Found missing keys in ${file}:`);
    console.log(JSON.stringify(missingKeys, null, 2));
    console.log('\n🤖 Sending to Gemini for Idiomatic Localization...');

    const prompt = `You are an expert bilingual copywriter and translator specializing in SaaS/Tech landing pages.
Your task is to localize the following English JSON data into Brazilian Portuguese.

CRITICAL RULES:
1. NEVER do literal word-by-word translation.
2. Maintain the tone: Professional, modern, and engaging.
3. Use idiomatic Brazilian Portuguese equivalents. If the English text uses an idiom, metaphor, or cultural phrase, find the conceptual equivalent in Brazilian Portuguese.
   - Example 1: "It's a piece of cake" -> "É mamão com açúcar"
   - Example 2: "Under the hood" -> "Por debaixo dos panos" ou "No motor"
4. Keep the text concise for UI buttons and headers.
5. Return ONLY valid JSON matching the exact structure of the input. Do not wrap it in markdown block quotes.

Input JSON:
${JSON.stringify(missingKeys, null, 2)}`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      let generatedJsonRaw = response.text;
      
      // Parse the result
      const translatedData = JSON.parse(generatedJsonRaw);

      // Apply translations
      applyTranslations(ptData, translatedData);

      // Save back to pt.json
      fs.writeFileSync(ptFilePath, JSON.stringify(ptData, null, 2));

      console.log(`🎉 pt/${file} has been successfully updated with idiomatic translations!`);
      
    } catch (error) {
      console.error(`❌ Failed to translate ${file}:`, error.message);
    }
  }

  if (totalMissingFiles === 0) {
    console.log('\nAll i18n files are fully translated!');
  }
}

run();
