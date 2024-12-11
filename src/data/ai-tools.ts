export type AITool = {
  name: string;
  modelType: string;
  developer: string;
  releaseDate: string;
  keyFeature: string;
  apiAvailability: string;
  dimensions: Record<string, number>;
};

export const aiTools: AITool[] = [
  {
    name: 'ChatGPT',
    modelType: 'LLM',
    developer: 'OpenAI',
    releaseDate: 'Nov 2022',
    keyFeature: 'Conversational AI',
    apiAvailability: 'Yes',
    dimensions: {
      languageUnderstanding: 90,
      contextualAwareness: 85,
      taskVersatility: 80,
      creativity: 75,
      factualAccuracy: 85,
    },
  },
  {
    name: 'Claude',
    modelType: 'LLM',
    developer: 'Anthropic',
    releaseDate: 'Mar 2023',
    keyFeature: 'Long context understanding',
    apiAvailability: 'Yes',
    dimensions: {
      languageUnderstanding: 88,
      contextualAwareness: 90,
      taskVersatility: 82,
      creativity: 70,
      factualAccuracy: 88,
    },
  },
  {
    name: 'Sora',
    modelType: 'Text-to-Video',
    developer: 'OpenAI',
    releaseDate: 'Feb 2024',
    keyFeature: 'High-quality video generation',
    apiAvailability: 'Limited beta',
    dimensions: {
      videoQuality: 95,
      creativityInVideoGen: 90,
      narrativeCoherence: 85,
      diversityOfStyles: 88,
      userControlability: 80,
    },
  },
  {
    name: 'Stable Diffusion',
    modelType: 'Text-to-Image',
    developer: 'Stability AI',
    releaseDate: 'Aug 2022',
    keyFeature: 'Open-source image generation',
    apiAvailability: 'Yes',
    dimensions: {
      imageQuality: 85,
      styleVersatility: 90,
      promptAdherence: 80,
      generationSpeed: 88,
      customizability: 92,
    },
  },
  {
    name: 'DALL-E 3',
    modelType: 'Text-to-Image',
    developer: 'OpenAI',
    releaseDate: 'Oct 2023',
    keyFeature: 'High-fidelity image creation',
    apiAvailability: 'Yes',
    dimensions: {
      imageQuality: 92,
      styleVersatility: 88,
      promptAdherence: 90,
      generationSpeed: 85,
      customizability: 80,
    },
  },
  {
    name: 'Midjourney',
    modelType: 'Text-to-Image',
    developer: 'Midjourney, Inc.',
    releaseDate: 'Jul 2022',
    keyFeature: 'Artistic image generation',
    apiAvailability: 'Discord bot',
    dimensions: {
      imageQuality: 90,
      styleVersatility: 95,
      promptAdherence: 85,
      generationSpeed: 82,
      customizability: 78,
    },
  },
  {
    name: 'GPT-4',
    modelType: 'LLM',
    developer: 'OpenAI',
    releaseDate: 'Mar 2023',
    keyFeature: 'Advanced reasoning',
    apiAvailability: 'Yes',
    dimensions: {
      languageUnderstanding: 95,
      contextualAwareness: 92,
      taskVersatility: 90,
      creativity: 85,
      factualAccuracy: 90,
    },
  },
  {
    name: 'LLaMA 2',
    modelType: 'LLM',
    developer: 'Meta AI',
    releaseDate: 'Jul 2023',
    keyFeature: 'Open-source LLM',
    apiAvailability: 'Yes (partners)',
    dimensions: {
      languageUnderstanding: 88,
      contextualAwareness: 85,
      taskVersatility: 80,
      creativity: 78,
      factualAccuracy: 85,
    },
  },
];

// export type AITool = typeof aiTools[number]

export type Dimension = keyof AITool['dimensions'];
