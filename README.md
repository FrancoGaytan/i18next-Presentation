# i18next-Presentation

## Introduction (i18n)
Internationalization i18n is the process of preparing software so that it can support local languages and cultural settings. An internationalized product supports the requirements of local markets around the world, functioning more appropriately based on local norms and better meeting in-country user expectations.  
I18n is often misrepresented as Localization (L10n) and sometimes even Translation. I18n is product development focused so that in the case of software, one code base is made capable of supporting worldwide languages and locale-specific formatting and behaviors. Conversely, Localization makes a product specific to a target market or region(s), including translation of the interface and possible adaptation of terminologies and more.  

### So what does software i18n involve?  
Typical software internationalization tasks include:  
* Developing software to be independent from a specific language.
* Locale Frameworks.
* Achieving Unicode compliance.
* Elimination of hard-coded text (strings) in the code.
* Removal and reworking of concatenated strings.
* Support for collation of data.
* Support for bi-directional languages.
* Plus more, including issues that may be application and market specific.  

### Benefits of internationalizaing software:  
Benefits of software i18n include:  
* Higher quality software that meets the technical and cultural needs of multiple locales.
* Reduced time, cost, and effort for localization.
* Single source code for all languages of the product.
* Simpler, easier maintenance for future iterations of the product.
* Greater in-country customer acceptance and satisfaction.  

Sourse: [lingoport](https://lingoport.com/what-is-i18n/)  

Perfect, now that we´ve covered the basics of the internalization process we can start talking about the way that JavaScript and React implement it with our main topic.

## Getting Started (i18next) 
Documentation: [i18next-Documentation](https://www.i18next.com/)  
i18next is an internationalization-framework written in and for JavaScript. But it's much more than that.
i18next goes beyond just providing the standard i18n features such as ([plurals](https://www.i18next.com/translation-function/plurals), [context](https://www.i18next.com/translation-function/context), [interpolation](https://www.i18next.com/translation-function/interpolation), [format](https://www.i18next.com/translation-function/formatting)). It provides you with a complete solution to localize your product from web to mobile and desktop.  
In order to be able to use our library later, we'll need to install it.  
### Installation
We can add it to our project using npm or yarn
#### npm
$ npm install i18next --save

#### yarn
$ yarn add i18next

## Basic Sample  
We have to be aware that the following example is just showing basic usage of the core functionality. For production you should consider using framework integrations yo fet better and simpler integrations.  

```
import i18next from 'i18next';

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
document.getElementById('output').innerHTML = i18next.t('key');
```


## What is react-i18next?  
react-i18next is a powerful internationalization framework for React / React Native which is based on i18next. You can check if you want, a litle bit of history about when [react-i18next-was-introduced](https://www.i18next.com/misc/the-history-of-i18next#v2)  
The module provides multiple components eg. to assert that needed translations get loaded or that your content gets rendered when the language changes. react-i18next is optimally suited for server-side rendering. It provides extra extension point to work with next.js, for e.g.  
As react-i18next depends on i18next you can use it in any other UI framework and on the server-side (node.js, .net, ...) too. Like the React philosophy  

### Installation
We can add it to our project using npm or yarn

#### npm
$ npm install react-i18next i18next --save

#### yarn
$ yarn add react-i18next i18next

### How to use it
In general it is not a good practice to have our texts scattered in our code, we can change a simple word in the jsx file and ruin very easy what we´re trying to achieve. Now simple content can easily be tranlated using the provided t function. For practical motives, in my code I´ll call the t function "translation". 

#### Before
```
<h1>Login</h1>
```

#### Now
```
<h1>{t("login.loginTitle")}</h1>
```   
Please notice that from now on we´ll be seeing code from an application which I´ll provide for you in order to understand everything, you can follow up this documentation with the actual app.  

We just talked about the "t" function (translation in the application) and we say wow very easy, right? but, Where does this function come from?

### useTranslation (hook)
It gets the t function and i18n instance inside your functional component.
```
import React from 'react';
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t, i18n } = useTranslation();
  // or const [t, i18n] = useTranslation();

  return <p>{t('my translated text')}</p>
}
```
Use the useTranslation hook inside your functional components to access the translation function or i18n instance.

### Changing the current Language

While most of the time you only need the t function to translate your content, you can also get the i18n instance (in order to change the language). As I did with the "t" function, I'll also change the i18n instance (to setTranslation) just in order to make it look similar to others React hooks, but with the opposite order, first the function and then the instance (replacing the state).

```
i18n.changeLanguage('en-US');
```
### useTranslation params
When we mentioned the [comparison between before and now](https://github.com/FrancoGaytan/i18next-Presentation/blob/main/README.md#before) we saw the param inside the "t" function (login.loginTitle) which it might not mean anything right now, but with this we´ll be looking up from the translation with this particular key.  
The other important param that we need is the one which goes inside of the useTranslation call.
```
const [t, i18n] = useTranslation("global");
```
In our case we are using global, which is the key of the resources inside of the i18n configuration and its value will tell us which is the file or the object where our localizations are.
```
 resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
    },
```

### Others Implementations
The useTranslation hook is not the only way there is for implementing react-i18next, it is though the only one which we are making focus on. But if you like, you can check out the alternative with High order Component [withTranslation (HOC)](https://react.i18next.com/latest/withtranslation-hoc) or the [Translation (render prop)](https://react.i18next.com/latest/translation-render-prop)

### Sending Props throughout your localizations  
There will be cases when you don´t know specifically what the localized text is going to be, those ocations might be because you need a name, or a number to take place inside the text you are going to show. In order to solve this issue, react-i18next allows us to pass props inside the value of some specific key which you have already defined.  
For instance, you have the following localization key:
```
authorName: "by {{ name }}",
```
The only think we must do inside our component localized text is something like this:
```
<h6>{translation("header.authorName", { name: "Franco Gaytan" })}</h6>
```
Note that the key is the same we defined and the name of the variable "name" (forgive the redundancy) is also the same, that is going to produce that inside the localized text we are going to find the value of the prop that we passed it inside the component. Something very useful in specific situations.

### Default Language Detector  
There might be some times when we are not going to want to change manually the current language, or to have a default language selection, in those situation is better to configurate a Language Detector which is another of the packages that react-i18next allow us to use.

We can add it to our project using npm or yarn
#### npm
$ npm install i18next-browser-languagedetector

#### yarn
$ yarn add i18next-browser-languagedetector

As with all modules you can eigher pass the constructor function to the i18next.use or a concrete instance.
```
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(LanguageDetector).init(i18nextOptions);
```
#### Detector Options  
There is a lot of configuration settings you might be interested in, I leave you here the complete guide of the package documentation. [i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector)  
All you need to do is inside the i18n instance, it doesn´t matter where you have it, eighter in your index.js or your config file, you have to add an object with the key detection and then the order and from where user language should be detected.  
```
i18next
  .use(initReactI18next).init({
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "path",
        "subdomain",
        "navigator",
      ],
     },
```
Another useful thing we can also add is if we want to have cache user language saved inside our application, for instance in the localStorage. In that case, as we added the order array inside the detection object, we also have to add the caches, like this...  
```
caches: ['localStorage', 'cookie'],
```

