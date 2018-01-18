import React from 'react';

export const CollectionPageView = ({info}) => {
  /* let test = info.description;

   var replaceHtmlEntities = (function() {
   var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
   var translate = {
   "nbsp": "\u00A0",
   "amp" : "&",
   "quot": "\"",
   "lt"  : "<",
   "gt"  : ">"
   };
   return function(s) {
   return ( s.replace(translate_re, function(match, entity) {
   return translate[entity];
   }) );
   }
   })();

   var cleanText = test.replace(/^\xa0*([^\xa0]*)\xa0*$/g,"");
   cleanText = replaceHtmlEntities(test);

   console.log(cleanText);



   let description = document.querySelector("collection-page__description");
   // description.innerHTML = info.description;
   console.log(description);



   */
  let phones = info.phones.map(
    (item) => {
      return {
        title: item['phone-title'],
        description: item['phone-description'],
        image: item['phone-images']['image'],
        image2x: item['phone-images']['image2x'],
        price: item['phone-price'],
        link: item['phone-link']
      }
    }
  );

  console.log(phones);

  console.log(info);
  return (
    <div className="collection-page">
      <div className="collection-page__title">{info.title}</div>
      <div className="collection-page__description">{info.description}</div>
      <div className="collection-page__phones">{
        phones.map(
          (item,index) => {
            return <div key={index}>
              <div>{item.title}</div>
              <div>{item.description}</div>
              <picture>
                <source srcSet={`${item.image}, ${item.image2x} 2x`}/>
                <img src={item.image} srcSet={`${item.image2x} 2x`} alt="index-product"/>
              </picture>
              <div>{item.price}</div>
              <div>{item.link}</div>
            </div>
          }
        )
      }</div>
      <div className="collection-page__materials"></div>
      <div className="collection-page__about"></div>
    </div>
  );
};
