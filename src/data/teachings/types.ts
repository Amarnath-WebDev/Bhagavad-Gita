export interface Teaching {
  id: number;
  title: string;
  sanskrit_title: string;
  key_concepts: string[];
  core_message: string;
  key_shlokas: Array<{
    number: string;
    sanskrit: string;
    english: string;
    explanation: string;
  }>;
  practical_wisdom: string[];
  sanskrit_terms: Array<{
    term: string;
    definition: string;
  }>;
  context: string;
  narrative_connection: string;
}