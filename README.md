# Tech Magazine

## Story

Create your own online newspaper - a tech-magazine. Create a catchy landing page and while you do not have writers - yet - use an online news API to fetch the news. Do not link them to the original sites - make the articles look better on YOUR site than the original!

## What are you going to learn?

- Parallel working

## Tasks

1. Create a fancy, catchy landing page for new users - and new users only! Make sure it is responsive. Make some part of it reusable as a loading mask.
    - When the page opens for the first time in a browser - and only for the first time(!) - the user is redirected to a landing page.
    - The page is fancy on all devices chrome can simulate
    - The page contains at least one component that is also used on the wall as a loading mask.

2. Use newsAPI to get the latest tech news. Get an API key, and make sure the user always gets the latest news. Beware the API key's limits and the data usage.
    - The app uses an API key from environment variables, and uses it to fetch the news.
    - NewsAPI is not fetched for every request, but still, fresh news are served.

3. [OPTIONAL] Make the user stay on your site as long as possible. No matter how much they scroll, they should find (older) posts. Use the fancy component from the landing page for loading mask.
    - When the user scrolls down to the oldest news, the app fetches the backend for older articles.
    - The newest article is always on the top, in a highlighted position.
    - When the new news are being fetched, a loading mask is presented.

## General requirements

None

## Hints

- Start the project with discussing and describing the necessary API endpoints between the frontend and the backend
- Design the wall and organize the code keeping in mind that you will get a component that you can use (insert) as a loading mask in the end
- Start the frontend with describing a minimal styleguide - fonts, colors, border radiuses... - so you can create the two pages (landing / wall) paralell if needed 

## Background materials

- <i class="far fa-exclamation"></i> [NewsAPI documentation](https://newsapi.org/)
- [Inspiration for online portal landing: VICE](https://vice.com/)
- [Inspiration for online portal landing: NOWNESS](https://nowness.com/)
- [Inspiration for online portal landing: POLYGON](https://www.polygon.com)
