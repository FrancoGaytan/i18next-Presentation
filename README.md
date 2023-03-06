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

