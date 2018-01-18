import React, {Component} from 'react';

import {CollectionPageView} from "./view";

import image245     from '../../assets/img/collectionPage/collection-phone-245x330.jpg';
import image245x2   from '../../assets/img/collectionPage/collection-phone-2x-245x330.jpg';

let JSONs = {
  "/smartphone-collection/": {
    "title": "КОЛЛЕКЦИЯ СМАРТФОНОВ\u00A0GRESSO",
    "description": "Самый тонкий смартфон класса люкс. ОС\u00A0Android. Эксклюзивный дизайн выражен в\u00A0безупречной форме и\u00A0в\u00A0сочетании дорогих материалов: титана и\u00A018-каратного золота. Коллекция статусных смартфонов является лимитированной. Всего представлено 999\u00A0экземпляров.",
    "phones": [
      {
        "phone-title": "Gresso Regal",
        "phone-description": "Титан. Золото 18\u00A0карат. ОС\u00A0Android.<br>Лимитированная коллекция.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 96 000 ₽",
        "phone-link": "#"
      }, {
        "phone-title": "Gresso Regal РОССИЯ",
        "phone-description": "Коллекция, посвященная России.<br>Золото 18\u00A0карат. Титан. ОС\u00A0Android.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 96 000 ₽",
        "phone-link": "#"
      }
    ]
  },
  "/iphone-collection/": {
    "title": "iPhone X\u00A0| 8\u00A0| 8\u00A0Plus",
    "description": "Новая коллекция дизайнерских iPhone X, 8\u00A0и\u00A08\u00A0Plus создана для ценителей эксклюзивных изделий и\u00A0неповторимого стиля Apple. Роскошный дизайн подчеркивает сочетание премиальных материалов\u00A0&mdash; титана, 18-каратного золота и\u00A0бриллиантов. В\u00A0лимитированной коллекции представлено 999\u00A0экземпляров.",
    "phones": [
      {
        "phone-title": "КОЛЛЕКЦИЯ BLACKWOOD<br>&#8203;iPhone X\u00A0| 8\u00A0| 8\u00A0Plus",
        "phone-description": "200-летнее черное дерево. Золото 18\u00A0карат.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 192 000 ₽",
        "phone-link": "#"
      }, {
        "phone-title": "КОЛЛЕКЦИЯ DIVA<br>&#8203;iPhone X\u00A0| 8",
        "phone-description": "Бриллианты. Золото 18\u00A0карат. Титан.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 187 000 ₽",
        "phone-link": "#"
      },{
        "phone-title": "КОЛЛЕКЦИЯ TITANIUM<br>&#8203;iPhone X\u00A0| 8\u00A0| 8\u00A0Plus",
        "phone-description": "Золото 18\u00A0карат. Титан.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 152 000 ₽",
        "phone-link": "#"
      }, {
        "phone-title": "КОЛЛЕКЦИЯ &#8203;РОССИЯ<br>&#8203;iPhone X\u00A0| 8\u00A0| 8\u00A0Plus",
        "phone-description": "Коллекция, посвященная России. Золото 18\u00A0карат. Титан.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 162 000 ₽",
        "phone-link": "#"
      }
    ]
  },
  "/phone-collection/": {
    "title": "КОЛЛЕКЦИЯ ТЕЛЕФОНОВ GRESSO",
    "description": "Единственный ультратонкий телефон класса люкс с\u00A02\u00A0SIM-картами. Создан как изысканное дополнение многофункциональным смартфонам. Gresso Meridian является эталоном современного классического стиля. Роскошный дизайн дополняют золотая клавиатура и\u00A0фирменный логотип, выполненный из\u00A018-каратного золота. Коллекция является лимитированной.",
    "phones": [
      {
        "phone-title": "GRESSO 3310",
        "phone-description": "Культовый телефон. Титановый корпус.\u00A02\u00A0SIM-карты.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 155 000 ₽",
        "phone-link": "#"
      }, {
        "phone-title": "Gresso MERIDIAN",
        "phone-description": "Титан. Золото 18\u00A0карат.\u00A02\u00A0SIM-карты.<br>Лимитированная коллекция.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 112 000 ₽",
        "phone-link": "#"
      },{
        "phone-title": "GRESSO MERIDIAN РОССИЯ",
        "phone-description": "Коллекция, посвященная России.<br>Титан. Золото 18\u00A0карат.\u00A02\u00A0SIM-карты.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 122 000 ₽",
        "phone-link": "#"
      }, {
        "phone-title": "Gresso Meridian Православие",
        "phone-description": "988\u00A0экземпляров. Золото 18\u00A0карат. Сусальное золото.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 380 000 ₽",
        "phone-link": "#"
      }
    ]
  },
  "/case-collection/": {
    "title": "Коллекция титановых чехлов Gresso для iPhone",
    "description": "Инновационная конструкция чехла Gresso легла в\u00A0основу создания уникального аксессуара для iPhone X, 8\u00A0и\u00A08\u00A0Plus. Роскошный дизайн подчеркивает сочетание премиальных материалов\u00A0&mdash; титана и\u00A018-каратного золота. В\u00A0лимитированной коллекции представлено всего 999\u00A0экземпляров.",
    "phones": [
      {
        "phone-title": "ТИТАНОВЫЙ ЧЕХОЛ ДЛЯ iPHONE X\u00A0| 8\u00A0| 8\u00A0PLUS MAGNUM",
        "phone-description": "2-уровневая конструкция. Титан. Золото 18\u00A0карат.<br>Лимитированная коллекция.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 29 000 ₽",
        "phone-link": "#"
      }, {
        "phone-title": "ТИТАНОВЫЙ ЧЕХОЛ ДЛЯ iPHONE X\u00A0| 8\u00A0| 8\u00A0PLUS MAGNUM РОССИЯ",
        "phone-description": "Золото 18\u00A0карат. Титан. Ручная работа. Художественная гравировка.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 29 000 ₽",
        "phone-link": "#"
      }
    ]
  },
  "/case-accessories/": {
    "title": "Аксессуары Gresso",
    "description": "Коллекции дизайнерских аксессуаров Gresso созданы для ценителей эксклюзивных изделий. Аксессуары станут прекрасным дополнением к\u00A0телефонам Gresso, создадут дополнительную защиту и\u00A0сделают процесс пользования телефоном по-настоящему удобным.",
    "phones": [
      {
        "phone-title": "DOCK-СТАНЦИЯ",
        "phone-description": "Аксессуар класса люкс для iPhone и\u00A0iPad mini. Эксклюзивная конструкция. Авиационный титан.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 15 000 ₽",
        "phone-link": "#"
      }, {
        "phone-title": "КОЖАНЫЕ ЧЕХЛЫ",
        "phone-description": "Эксклюзивные аксессуары дополняют роскошный образ изделий Gresso. Натуральная кожа.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 3 000 ₽",
        "phone-link": "#"
      },{
        "phone-title": "ЗАЩИТНЫЕ СТЕКЛА",
        "phone-description": "Твердость 9Н. Максимальная защита экрана изделий Gresso от\u00A0повреждений и\u00A0царапин.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 3 000 ₽",
        "phone-link": "#"
      }, {
        "phone-title": "ЗАРЯДНЫЕ УСТРОЙСТВА",
        "phone-description": "Дополнительные ЗУ\u00A0с\u00A0переходниками для розеток региональных стандартов.",
        "phone-images": {
          "image": image245,
          "image2x": image245x2,
        },
        "phone-price":"от 5 000 ₽",
        "phone-link": "#"
      }
    ]
  }
};

let testJSON = '{"title":"Самый тонкий смартфон класса люкс. ОС\u00A0Android.","description":"Единственный ультратонкий телефон класса люкс с\u00A02\u00A0SIM-картами."}';
let testOutput = JSON.parse(testJSON);
console.log(testOutput);

export class CollectionPage extends Component {
  render() {
    switch (this.props.location.pathname) {
      case "/smartphone-collection/":
        return (
          <CollectionPageView info={JSONs[/smartphone-collection/]}/>
        );
      case "/iphone-collection/":
        return (
          <CollectionPageView info={JSONs[/iphone-collection/]}/>
        );
      case "/phone-collection/":
        return (
          <CollectionPageView info={JSONs[/phone-collection/]}/>
        );
      case "/case-collection/":
        return (
          <CollectionPageView info={JSONs[/case-collection/]}/>
        );
      case "/case-accessories/":
        return (
          <CollectionPageView info={JSONs[/case-accessories/]}/>
        );
      default: return (
        <div>something wrong</div>
      );
    }
  }
}