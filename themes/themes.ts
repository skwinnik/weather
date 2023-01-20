export interface ITheme {
  primary: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
    "50_rgb": string;
    "100_rgb": string;
    "200_rgb": string;
    "300_rgb": string;
    "400_rgb": string;
    "500_rgb": string;
    "600_rgb": string;
    "700_rgb": string;
    "800_rgb": string;
    "900_rgb": string;
  };
}

export interface ITempRange {
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  "10": string;
  "11": string;
  "12": string;
  "13": string;
  "14": string;
  "15": string;

  "1_rgb": string;
  "2_rgb": string;
  "3_rgb": string;
  "4_rgb": string;
  "5_rgb": string;
  "6_rgb": string;
  "7_rgb": string;
  "8_rgb": string;
  "9_rgb": string;
  "10_rgb": string;
  "11_rgb": string;
  "12_rgb": string;
  "13_rgb": string;
  "14_rgb": string;
  "15_rgb": string;
}

export function TempRange(): ITempRange {
  return {
    "1": "#1e3a8a",
    "2": "#1e40af",
    "3": "#1d4ed8",
    "4": "#2563eb",
    "5": "#0284c7",
    "6": "#0ea5e9",
    "7": "#06b6d4",
    "8": "#22d3ee",
    "9": "#67e8f9",
    "10": "#fde68a",
    "11": "#fde047",
    "12": "#fed7aa",
    "13": "#fdba74",
    "14": "#fca5a5",
    "15": "#f87171",

    "1_rgb": "30 58 138",
    "2_rgb": "30 64 175",
    "3_rgb": "29 78 216",
    "4_rgb": "37 99 235",
    "5_rgb": "2 132 199",
    "6_rgb": "14 165 233",
    "7_rgb": "6 182 212",
    "8_rgb": "34 211 238",
    "9_rgb": "103 232 249",
    "10_rgb": "253 230 138",
    "11_rgb": "253 224 71",
    "12_rgb": "253 215 170",
    "13_rgb": "253 186 116",
    "14_rgb": "252 165 165",
    "15_rgb": "248 113 113",
  };
}

export function Day(): ITheme {
  return {
    primary: {
      "50": "#f0f9ff",
      "100": "#e0f2fe",
      "200": "#bae6fd",
      "300": "#7dd3fc",
      "400": "#38bdf8",
      "500": "#0ea5e9",
      "600": "#0284c7",
      "700": "#0369a1",
      "800": "#075985",
      "900": "#0c4a6e",
      "50_rgb": "240 249 255",
      "100_rgb": "224 242 254",
      "200_rgb": "186 230 253",
      "300_rgb": "125 211 252",
      "400_rgb": "56 189 248",
      "500_rgb": "14 165 233",
      "600_rgb": "2 132 199",
      "700_rgb": "3 105 161",
      "800_rgb": "7 89 133",
      "900_rgb": "12 74 110",
    },
  };
}

export function Evening(): ITheme {
  return {
    primary: {
      "50": "#fffbeb",
      "100": "#fef3c7",
      "200": "#fde68a",
      "300": "#fcd34d",
      "400": "#fbbf24",
      "500": "#f59e0b",
      "600": "#d97706",
      "700": "#b45309",
      "800": "#92400e",
      "900": "#78350f",
      "50_rgb": "255 251 235",
      "100_rgb": "254 243 199",
      "200_rgb": "253 230 138",
      "300_rgb": "252 211 77",
      "400_rgb": "251 191 36",
      "500_rgb": "245 158 11",
      "600_rgb": "217 119 6",
      "700_rgb": "180 83 9",
      "800_rgb": "146 64 14",
      "900_rgb": "120 53 15",
    },
  };
}
