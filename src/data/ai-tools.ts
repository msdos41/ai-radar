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
  // Large Language Models (LLM)
  {
    name: 'GPT-4',
    modelType: 'LLM',
    developer: 'OpenAI',
    releaseDate: 'Mar 2023',
    keyFeature: 'Advanced reasoning and generation',
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
    name: 'Claude 2',
    modelType: 'LLM',
    developer: 'Anthropic',
    releaseDate: 'Jul 2023',
    keyFeature: 'Long context analysis',
    apiAvailability: 'Yes',
    dimensions: {
      languageUnderstanding: 93,
      contextualAwareness: 94,
      taskVersatility: 88,
      creativity: 82,
      factualAccuracy: 92,
    },
  },
  {
    name: 'PaLM 2',
    modelType: 'LLM',
    developer: 'Google',
    releaseDate: 'May 2023',
    keyFeature: 'Multilingual multitasking',
    apiAvailability: 'Limited',
    dimensions: {
      languageUnderstanding: 92,
      contextualAwareness: 90,
      taskVersatility: 91,
      creativity: 84,
      factualAccuracy: 89,
    },
  },
  {
    name: 'LLaMA 2',
    modelType: 'LLM',
    developer: 'Meta AI',
    releaseDate: 'Jul 2023',
    keyFeature: 'Open-source with commercial use',
    apiAvailability: 'Yes (through partners)',
    dimensions: {
      languageUnderstanding: 90,
      contextualAwareness: 88,
      taskVersatility: 86,
      creativity: 83,
      factualAccuracy: 87,
    },
  },
  {
    name: 'BLOOM',
    modelType: 'LLM',
    developer: 'BigScience',
    releaseDate: 'Jul 2022',
    keyFeature: 'Multilingual open-source',
    apiAvailability: 'Yes',
    dimensions: {
      languageUnderstanding: 88,
      contextualAwareness: 85,
      taskVersatility: 84,
      creativity: 80,
      factualAccuracy: 86,
    },
  },

  // Text-to-Image Generation
  {
    name: 'DALL-E 3',
    modelType: 'Text-to-Image',
    developer: 'OpenAI',
    releaseDate: 'Oct 2023',
    keyFeature: 'High-fidelity image creation',
    apiAvailability: 'Yes',
    dimensions: {
      imageQuality: 95,
      styleVersatility: 92,
      promptAdherence: 94,
      generationSpeed: 88,
      customizability: 85,
    },
  },
  {
    name: 'Midjourney V5',
    modelType: 'Text-to-Image',
    developer: 'Midjourney, Inc.',
    releaseDate: 'Mar 2023',
    keyFeature: 'Detailed artistic images',
    apiAvailability: 'Discord bot',
    dimensions: {
      imageQuality: 94,
      styleVersatility: 96,
      promptAdherence: 90,
      generationSpeed: 85,
      customizability: 82,
    },
  },
  {
    name: 'Stable Diffusion XL',
    modelType: 'Text-to-Image',
    developer: 'Stability AI',
    releaseDate: 'Jul 2023',
    keyFeature: 'Open-source image generation',
    apiAvailability: 'Yes',
    dimensions: {
      imageQuality: 92,
      styleVersatility: 94,
      promptAdherence: 88,
      generationSpeed: 90,
      customizability: 95,
    },
  },

  // Text-to-Video Generation
  {
    name: 'Sora',
    modelType: 'Text-to-Video',
    developer: 'OpenAI',
    releaseDate: 'Feb 2024',
    keyFeature: 'High-quality video from text',
    apiAvailability: 'Limited beta',
    dimensions: {
      videoQuality: 95,
      narrativeCoherence: 92,
      promptAdherence: 90,
      durationCapability: 85,
      styleVersatility: 88,
    },
  },
  {
    name: 'Runway Gen-2',
    modelType: 'Text-to-Video',
    developer: 'Runway',
    releaseDate: 'Mar 2023',
    keyFeature: 'AI video generation and editing',
    apiAvailability: 'Yes',
    dimensions: {
      videoQuality: 90,
      narrativeCoherence: 85,
      promptAdherence: 88,
      durationCapability: 80,
      styleVersatility: 92,
    },
  },
  {
    name: 'Phenaki',
    modelType: 'Text-to-Video',
    developer: 'Google',
    releaseDate: 'Oct 2022',
    keyFeature: 'Long-form video from text',
    apiAvailability: 'Research only',
    dimensions: {
      videoQuality: 85,
      narrativeCoherence: 90,
      promptAdherence: 86,
      durationCapability: 95,
      styleVersatility: 82,
    },
  },

  // Other AI Tools
  {
    name: 'ChatGPT',
    modelType: 'AI Assistant',
    developer: 'OpenAI',
    releaseDate: 'Nov 2022',
    keyFeature: 'Versatile conversational AI',
    apiAvailability: 'Yes',
    dimensions: {
      conversationalAbility: 95,
      taskCompletion: 90,
      userFriendliness: 92,
      knowledgeBreadth: 88,
      contextRetention: 85,
    },
  },
  {
    name: 'GitHub Copilot',
    modelType: 'Code Generation',
    developer: 'GitHub & OpenAI',
    releaseDate: 'Jun 2021',
    keyFeature: 'AI code completion',
    apiAvailability: 'Integrated in IDEs',
    dimensions: {
      codeQuality: 88,
      languageCoverage: 92,
      contextUnderstanding: 90,
      suggestionRelevance: 85,
      documentationGeneration: 80,
    },
  },
  {
    name: 'NVIDIA Broadcast',
    modelType: 'Audio/Video Enhancement',
    developer: 'NVIDIA',
    releaseDate: 'Sep 2020',
    keyFeature: 'AI-enhanced streaming',
    apiAvailability: 'Software download',
    dimensions: {
      noiseReduction: 95,
      virtualBackground: 90,
      autoFraming: 88,
      eyeContact: 85,
      performanceImpact: 92,
    },
  },
  {
    name: 'Jasper',
    modelType: 'Content Generation',
    developer: 'Jasper.ai',
    releaseDate: 'Jan 2021',
    keyFeature: 'AI marketing content creation',
    apiAvailability: 'Yes',
    dimensions: {
      writingQuality: 88,
      contentVariety: 90,
      SEOOptimization: 85,
      userInterface: 92,
      outputCustomization: 86,
    },
  },
  {
    name: 'Grammarly',
    modelType: 'Writing Assistant',
    developer: 'Grammarly, Inc.',
    releaseDate: 'Jul 2009',
    keyFeature: 'AI writing enhancement',
    apiAvailability: 'Browser extension & API',
    dimensions: {
      grammarAccuracy: 95,
      styleImprovement: 90,
      contextualSuggestions: 88,
      plagiarismDetection: 85,
      multilingualSupport: 80,
    },
  },
];

// export type AITool = typeof aiTools[number]

export type Dimension = keyof AITool['dimensions'];
