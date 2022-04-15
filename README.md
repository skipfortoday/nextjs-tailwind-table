## Next.JS Tailwind & Table with Random User API

Check on [Demo](https://nextjs-tailwind-table.vercel.app) .

Feature :

- Debounce Search.
- Sorting & filtering table.
- Pagination
- Search
- Simple github action to check dependencies & build in any node version
- Simple cy-press unit test

## Getting Started

First, Clone this Repository:

```bash
git clone https://github.com/skipfortoday/nextjs-tailwind-table.git
```

Install Dependency:

```bash
#move to directory apps
cd nextjs-tailwind-table
#install dependencies
npm install
```

run the on development server:

```bash
npm run dev
```

apps will start on [http://localhost:3000](http://localhost:3000) .

## Description

This Apps build with:

- [Random User API](https://randomuser.me/documentation) - API Random user.
- [Next.js](https://nextjs.org/docs) - Framework for React with SSR.
- [Tailwind](https://tailwindcss.com/) - ui framework.
- [DaisyUI](https://daisyui.com/) - Tailwind Component Plugin.
- [Redux](https://redux.js.org/) - State Management.
- [Next Redux Wrapper](https://www.npmjs.com/package/next-redux-wrapper) - Library to easy warp Next.js with Redux.
- [Axios](https://axios-http.com/docs/intro) - HTTP Client.

If you try this apps data will not change on click sorting table, beacuse the API no provide it. But you can check on network the implement of sorting by click table header.

I give a 'seed' on parameters API to give a consitency when we use pagination.

you can also remove 'seed' to give interaction when clicking sorting table. but data will not consistance in pagination

```javascript
//change initState ./src/contants/keys
export const initState = {
  page: 1,
  pageSize: 3,
  results: 10,
  inc: "gender,name,username,email,registered,login",
  seed: "rizqiramadhani", //remove seed to give interaction & indicator short table
  sort: null,
  keyword: null,
  gender: null,
};
```

Then the next important feature is deboucing search, to avoid spaming call API when user search onchange input. We can implement deboucing search by setting timeout and use callback to handle onChange method.

I give a simple Github action worksflow to check this repo/apps can run with another node version 12xx ,14xx 16xx

Unit test is using cy-press

run the unit test by:

```bash
npm run test
```

and then will show window testing load,click,select,filter and reset automate by cy-press

You can check out [This Repo](https://github.com/skipfortoday/nextjs-tailwind-table) - to give your feedback and contributions are welcome!

## Deploy on Vercel

You can easy deploy your apps to [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
