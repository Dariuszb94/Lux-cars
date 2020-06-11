# Car dealer app

The App lets you search for cars, saving favourites and calculate loans.

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

The App has multiple functions regarding car purchase.

In the header, clicking on logo lets you go to the main page wherever you are. Menu includes of five links to different elements of car dealership. Element of menu - "USED CARS" is a dropdown list, you can choose desired car brand to show. The Main page slider has two backgrounds with content, they are changing every ten seconds. On the main page slider you can also select car brand and car model which you desire to find. You can see list of cars after clicking "search". Footer of page has call and mail functionality, also you can go to twitter and facebook page from there.

The Car list can be filtered by brand, model, power, year, price. List is constantly updating. You can reset filters by clicking "RESET FILTERS". List can be also sorted by price. Car list consist of car offers. You can add car to favourite ("Add to favourites") or access list of favourites cars ("View favourites"). Favourite cars are storaged in indexedDB.

After clicking on car offer you are redirected to detailed offer, you can reach top of this element by clicking on "UP". There you can see more images (zooming is available), feature info, description info and finance info.

Feature info consists of three dropdown list of car attributes. Description info consists of list info and long text info. Finance info lets you calculate car loan basing of car price, term and self deposit.

Below, contact section lets you send request regarding current car, data are being validated before sending. If all data are OK, info is displayed.

Another element is similar car section, based on actual car propositions are displayed. You can click on them to see offers.

Finance section lets you fill the form, data are being validated before sending. If all data are OK, info is displayed.

About section consists of text info and search. You can also contact (mail and telephone) from there.

Contact section is made to locate company on map and to send info by form.

## Technologies

Project is created with:

- React version: 16.13.1
- Redux: 4.0.5,
- Redux-thunk: 2.3.0,
- Styled-components: 5.1.0,
- Material-ui/icons: 4.9.1,
- Dexie: 3.0.1
- React-image-magnifiers: 1.3.2
- React-transitions: 1.0.0
- Better-docs: 2.0.1
- Gh-pages: 2.2.0
- jsdoc: 3.6.4

## Setup

To run this project, download a repo, then go to repo folder, open terminal:

```
$ npm install
$ npm run start
```

[Click for more detailed documentation](https://dariuszb94.github.io/Lux-cars/docs/index)
