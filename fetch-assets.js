import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, "./src/assets");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const assets = [
  {
    name: "image_1781620985747.png",
    url: "https://images.unsplash.com/photo-1593341604075-01140687022f?auto=format&fit=crop&q=80&w=120",
    fallbackBase64: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" // 1x1 png
  },
  {
    name: "R1_1781620882635.webp",
    url: "https://images.unsplash.com/photo-1531415080290-bc9b161a0fc2?auto=format&fit=crop&q=80&w=1200",
    fallbackBase64: "UklGRhoAAABXRUJQVlA4TCEAAAAvAAAAEP8EAgd0Yv8BlA56DwD/BQQD/wEE/wQHBg8A" // 1x1 webp
  },
  {
    name: "R2_1781620882634.webp",
    url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200",
    fallbackBase64: "UklGRhoAAABXRUJQVlA4TCEAAAAvAAAAEP8EAgd0Yv8BlA56DwD/BQQD/wEE/wQHBg8A"
  },
  {
    name: "R3_1781620882633.webp",
    url: "https://images.unsplash.com/photo-1512412046876-0c868029a39a?auto=format&fit=crop&q=80&w=1200",
    fallbackBase64: "UklGRhoAAABXRUJQVlA4TCEAAAAvAAAAEP8EAgd0Yv8BlA56DwD/BQQD/wEE/wQHBg8A"
  },
  {
    name: "Pitch_2_1781620865693.webp",
    url: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=1200",
    fallbackBase64: "UklGRhoAAABXRUJQVlA4TCEAAAAvAAAAEP8EAgd0Yv8BlA56DwD/BQQD/wEE/wQHBg8A"
  },
  {
    name: "Tournament_10_1781620865699.webp",
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    fallbackBase64: "UklGRhoAAABXRUJQVlA4TCEAAAAvAAAAEP8EAgd0Yv8BlA56DwD/BQQD/wEE/wQHBg8A"
  },
  {
    name: "Pitch_3_1781620865691.webp",
    url: "https://images.unsplash.com/photo-1624526261116-ab5d22650011?auto=format&fit=crop&q=80&w=1200",
    fallbackBase64: "UklGRhoAAABXRUJQVlA4TCEAAAAvAAAAEP8EAgd0Yv8BlA56DwD/BQQD/wEE/wQHBg8A"
  },
  {
    name: "R4_1781620882632.webp",
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    fallbackBase64: "UklGRhoAAABXRUJQVlA4TCEAAAAvAAAAEP8EAgd0Yv8BlA56DwD/BQQD/wEE/wQHBg8A"
  },
  {
    name: "Founder_2_1781620865690.webp",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    fallbackBase64: "UklGRhoAAABXRUJQVlA4TCEAAAAvAAAAEP8EAgd0Yv8BlA56DwD/BQQD/wEE/wQHBg8A"
  },
  {
    name: "image_1781702619294.png",
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    fallbackBase64: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
  },
  {
    name: "Award_1_1781620865697.webp",
    url: "https://images.unsplash.com/photo-1578269174936-2709b5a5c0e5?auto=format&fit=crop&q=80&w=800",
    fallbackBase64: "UklGRhoAAABXRUJQVlA4TCEAAAAvAAAAEP8EAgd0Yv8BlA56DwD/BQQD/wEE/wQHBg8A"
  },
  {
    name: "Medal_1_1781620865695.webp",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    fallbackBase64: "UklGRhoAAABXRUJQVlA4TCEAAAAvAAAAEP8EAgd0Yv8BlA56DwD/BQQD/wEE/wQHBg8A"
  },
  {
    name: "Award_2_1781620865696.webp",
    url: "https://images.unsplash.com/photo-1531415080290-bc9b161a0fc2?auto=format&fit=crop&q=80&w=800",
    fallbackBase64: "UklGRhoAAABXRUJQVlA4TCEAAAAvAAAAEP8EAgd0Yv8BlA56DwD/BQQD/wEE/wQHBg8A"
  }
];

async function downloadAsset(asset) {
  const filePath = path.join(targetDir, asset.name);
  console.log(`Downloading ${asset.name} from ${asset.url}...`);
  try {
    const response = await fetch(asset.url, { signal: AbortSignal.timeout(6000) });
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    console.log(`✓ successfully downloaded ${asset.name}`);
  } catch (error) {
    console.error(`⚠️ Failed downloading ${asset.name}, writing fallback base64: ${error.message}`);
    const buffer = Buffer.from(asset.fallbackBase64, "base64");
    fs.writeFileSync(filePath, buffer);
    console.log(`✓ wrote default placeholder for ${asset.name}`);
  }
}

async function main() {
  for (const asset of assets) {
    await downloadAsset(asset);
  }
  console.log("All image references populated!");
}

main();
