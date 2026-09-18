module.exports = class {
  data() {
    return {
      permalink: "/game-data.json",
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    const examples = data.collections.example.map((example) => ({
      id: example.fileSlug,
      ruleId: example.data.ruleId,
      type: example.data.type,
      title: example.data.title,
      snippetLang: example.data.snippetLang,
      snippet: example.data.snippet,
      correctAnswer: example.data.correctAnswer,
      distractors: example.data.distractors,
    }));
    return JSON.stringify(examples, null, 2);
  }
};
