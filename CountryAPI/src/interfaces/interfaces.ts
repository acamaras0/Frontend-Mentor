export interface Country {
  name: string;
  capital?: string;
  population: number;
  flag: string;
  region: string;
}

export interface CountryList {
  countries: Country[];
}
