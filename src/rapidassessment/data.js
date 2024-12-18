export function getLocations() {
  let loc = {
    locations: [
      {
        name: "Bologna - Italy",
        code: "IT",
        lat: 44.4303223,
        lng: 11.7845981,
        zone: "Continental",
        url: "https://wateragri.eu/bologna-italy/",
      },
      // /https://wateragri.eu/auxerre-france/
      {
        name: "Auxerre - France",
        code: "IT",
        lat: 47.800499,
        lng: 3.5666,
        zone: "Continental",
        url: "https://wateragri.eu/auxerre-france/",
      },
      {
        name: "Seeland - Switzerland",
        code: "CH",
        lat: 47.05048,
        lng: 7.2505,
        zone: "Continental",
        url: "https://wateragri.eu/seeland-switzerland/",
      },
      {
        name: "Poland - Lubnov",
        code: "PL",
        lat: 51.24908923,
        lng: 16.89711895,
        zone: "Continental",
        url: "https://wateragri.eu/wateragri-pilots-continental-zone-poland/",
      },
      {
        name: "Sweden - Lund",
        code: "SE",
        lat: 55.7119069,
        lng: 13.2030675,
        zone: "Boreal",
        url: "https://wateragri.eu/wateragri-pilots-boreal-zone-sweden/",
      },
      {
        name: "Finland - I Municipality of Tyrnava",
        code: "FI1",
        lat: 62.5,
        lng: 22.5,
        zone: "Boreal",
        url: "https://wateragri.eu/finland-i-municipality-of-tyrnava/",
      },
      {
        name: "Finland - II Municipality of Ruukki",
        code: "FI2",
        lat: 64.5,
        lng: 26.5,
        zone: "Boreal",
        url: "https://wateragri.eu/finland-ii-municipality-of-ruukki/",
      },
      {
        name: "Nyirbator, Hungary",
        code: "HU",
        lat: 47.735,
        lng: 22.133,
        zone: "Pannonian",
        url: "https://wateragri.eu/nyrbator-hungary/",
      },
      {
        name: "Selhausen, Germany",
        code: "DE",
        lat: 50.9,
        lng: 6.5,
        zone: "Continental",
        url: "https://wateragri.eu/selhausen-germany/",
      },
      // https://wateragri.eu/austria/
      {
        name: "Austria",
        code: "AT",
        lat: 47.516231,
        lng: 14.550072,
        zone: "Continental",
        url: "https://wateragri.eu/austria/",
      },
    ],
  };

  return loc;
}

export function getSolutions() {
  let s = [
    {
      dim: "gen",
      WATERAGRI_Sites: "FI1",
      suitability: 10,
      solution: "-",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FI2",
      suitability: 10,
      solution: "-",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "HU",
      suitability: 5,
      solution: "-",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FR",
      suitability: 1,
      solution: "-",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "DE",
      suitability: 1,
      solution: "-",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "PL",
      suitability: 1,
      solution: "-",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "CH",
      suitability: 1,
      solution: "-",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "AT",
      suitability: 1,
      solution: "-",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "IT",
      suitability: 1,
      solution: "-",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "AT",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FI1",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FI2",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "AT",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Biochar",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FI1",
      suitability: 5,
      solution: "Biochar",
      reason: "boreal climate",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FI2",
      suitability: 5,
      solution: "Biochar",
      reason: "boreal climate",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FI1",
      suitability: 5,
      solution: "Biochar",
      reason: "problem: high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FI2",
      suitability: 5,
      solution: "Biochar",
      reason: "problem: high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "SE",
      suitability: 5,
      solution: "Biochar",
      reason: "problem: high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FR",
      suitability: 5,
      solution: "Biochar",
      reason: "problem: high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "DE",
      suitability: 5,
      solution: "Biochar",
      reason: "problem: high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "CH",
      suitability: 5,
      solution: "Biochar",
      reason: "problem: high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "AT",
      suitability: 5,
      solution: "Biochar",
      reason: "problem: high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "IT",
      suitability: 5,
      solution: "Biochar",
      reason: "problem: high labor, energy and material costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FI1",
      suitability: 5,
      solution: "Biochar",
      reason: "climate, costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FI2",
      suitability: 5,
      solution: "Biochar",
      reason: "climate, costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "SE",
      suitability: 5,
      solution: "Biochar",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FR",
      suitability: 5,
      solution: "Biochar",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "DE",
      suitability: 5,
      solution: "Biochar",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "CH",
      suitability: 5,
      solution: "Biochar",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "AT",
      suitability: 5,
      solution: "Biochar",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "IT",
      suitability: 5,
      solution: "Biochar",
      reason: "costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "AT",
      suitability: 1,
      solution: "Farm Constructed Wetlands",
      reason: "farm size; cost of labor",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FR",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "DE",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "CH",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "AT",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "IT",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FI1",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FI2",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "SE",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "costs",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FI1",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FI2",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "AT",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FI1",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FI2",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "AT",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Drainage Systems",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FI1",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FI2",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "SE",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FR",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "DE",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "CH",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "AT",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "IT",
      suitability: 5,
      solution: "Drainage Systems",
      reason: "high labor, energy and material costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FI1",
      suitability: 10,
      solution: "Enhanced Water Retainer",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FI2",
      suitability: 10,
      solution: "Enhanced Water Retainer",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Enhanced Water Retainer",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Enhanced Water Retainer",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Enhanced Water Retainer",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Enhanced Water Retainer",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Enhanced Water Retainer",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "AT",
      suitability: 10,
      solution: "Enhanced Water Retainer",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Enhanced Water Retainer",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Enhanced Water Retainer",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FR",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "cereal crop but other crops OK",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "DE",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "cereal crop but other crops OK",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "PL",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "cereal crop but other crops OK",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "CH",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "cereal crop but other crops OK",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "AT",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "cereal crop but other crops OK",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "IT",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "cereal crop but other crops OK",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FR",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "type of crop used, acceptance",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "DE",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "type of crop used, acceptance",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "PL",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "type of crop used, acceptance",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "CH",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "type of crop used, acceptance",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "AT",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "type of crop used, acceptance",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "IT",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "type of crop used, acceptance",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FI1",
      suitability: 1,
      solution: "Enhanced Water Retainer",
      reason: "root crop",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FI2",
      suitability: 1,
      solution: "Enhanced Water Retainer",
      reason: "grass",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "SE",
      suitability: 1,
      solution: "Enhanced Water Retainer",
      reason: "cereal crop",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "HU",
      suitability: 1,
      solution: "Enhanced Water Retainer",
      reason: "cereal crop",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FI1",
      suitability: 1,
      solution: "Enhanced Water Retainer",
      reason: "root crop; low acceptance",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FI2",
      suitability: 1,
      solution: "Enhanced Water Retainer",
      reason: "grass; low acceptance",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "SE",
      suitability: 1,
      solution: "Enhanced Water Retainer",
      reason: "cereal crop",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "HU",
      suitability: 1,
      solution: "Enhanced Water Retainer",
      reason: "cereal crop",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "AT",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FI1",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FI2",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "AT",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "AT",
      suitability: 1,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Farm Constructed Wetlands",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FI1",
      suitability: 5,
      solution: "Farm Constructed Wetlands",
      reason: "boreal climate;",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FI2",
      suitability: 5,
      solution: "Farm Constructed Wetlands",
      reason: "boreal climate;",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FI1",
      suitability: 5,
      solution: "Farm Constructed Wetlands",
      reason: "costs",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FI2",
      suitability: 5,
      solution: "Farm Constructed Wetlands",
      reason: "costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FI1",
      suitability: 5,
      solution: "Farm Constructed Wetlands",
      reason: "climate, costs",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FI2",
      suitability: 5,
      solution: "Farm Constructed Wetlands",
      reason: "climate, costs",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FI1",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FI2",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FI1",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FI2",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "AT",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FI1",
      suitability: 1,
      solution: "Precision Irrigation System",
      reason: "farm size",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "FI2",
      suitability: 1,
      solution: "Precision Irrigation System",
      reason: "farm size",
    },
    {
      dim: "eco",
      WATERAGRI_Sites: "AT",
      suitability: 1,
      solution: "Precision Irrigation System",
      reason: "farm size",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "AT",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "env",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "SE",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FR",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "DE",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "PL",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "CH",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "AT",
      suitability: 1,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "IT",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "HU",
      suitability: 10,
      solution: "Precision Irrigation System",
      reason: "",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FI1",
      suitability: 1,
      solution: "Precision Irrigation System",
      reason: "farm size",
    },
    {
      dim: "gen",
      WATERAGRI_Sites: "FI2",
      suitability: 1,
      solution: "Precision Irrigation System",
      reason: "farm size",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FI1",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "level of acceptance is low",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FI2",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "level of acceptance is low",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "SE",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "level of acceptance is low",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "FR",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "level of acceptance is low",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "DE",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "level of acceptance is low",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "PL",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "level of acceptance is low",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "CH",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "level of acceptance is low",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "AT",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "level of acceptance is low",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "IT",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "level of acceptance is low",
    },
    {
      dim: "soc",
      WATERAGRI_Sites: "HU",
      suitability: 5,
      solution: "Enhanced Water Retainer",
      reason: "level of acceptance is low",
    },
  ];

  return s;
}
