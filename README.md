# Cuantos Tacos

Demo landing page for **Cuantos Tacos**, a Michelin Bib Gourmand–recognized Mexico City–style street taco truck at 1108 E 12th St in East Austin, Texas.

Live site: https://cuantos-tacos.programmingwhilesleeping.workers.dev/

## Brand Facts

- **Name**: Cuantos Tacos ("¿Cuántos tacos?" = "How many tacos?")
- **Chef / Owner**: Luis "Beto" Robledo (serving Austin since September 2019)
- **Recognition**: Michelin Guide Bib Gourmand, 2024 & 2025
- **Craft**: 100% nixtamal corn tortillas (bright yellow and paper-thin); meats cooked in a traditional chorizera pan with a raised center
- **Address**: 1108 E 12th St, Austin, TX 78702 (shaded food-truck park with picnic tables)
- **Phone**: (512) 903-3918
- **Hours**: Tue–Sat 11:00 AM–10:00 PM · Sun 10:00 AM–4:00 PM · Mon closed
- **Order Pickup**: https://www.cuantostacosaustin.com/
- **Instagram**: https://www.instagram.com/cuantostacos512/

## Local Preview

```powershell
node scripts/stage-dist.mjs
python -m http.server 4730 --directory dist
```

Open http://127.0.0.1:4730.

## Cloudflare

Pushes to `main` deploy with `.github/workflows/deploy.yml`. The workflow needs repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.

Worker name: `cuantos-tacos`.
