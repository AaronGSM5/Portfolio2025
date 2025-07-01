const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const OUTPUT_DIR = process.env.OUTPUT_DIR || 'data';
const OUTPUT_FILENAME = process.env.OUTPUT_FILENAME || 'repos.json';

async function fetchAndProcessRepos() {
  if (!GITHUB_USERNAME) {
    console.error('Error: GITHUB_USERNAME environment variable is not set.');
    process.exit(1);
  }

  try {
    console.log(`Fetching public repositories for user: ${GITHUB_USERNAME}`);
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
    );

    if (!response.ok) {
      throw new Error(`GitHub API request failed: ${response.status} ${response.statusText}`);
    }

    const repos = await response.json();

    const processedRepos = repos
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        updated_at: repo.updated_at
      }));

    const outputPath = path.join(OUTPUT_DIR, OUTPUT_FILENAME);

    // Stelle sicher, dass der Ausgabeordner existiert
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(processedRepos, null, 2));
    console.log(`Successfully saved repository data to ${outputPath}`);
  } catch (error) {
    console.error('Failed to fetch or process repositories:', error.message);
    process.exit(1);
  }
}

fetchAndProcessRepos();
