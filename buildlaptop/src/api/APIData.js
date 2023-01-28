import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    product: [
      {
        id: "1",
        title: "iMac 27 Retina",
        type: "Desktop",
        price: "$2099.99",
        price_sale: "",
        img: "assets/img/products/apple-imac-27-retina.jpg",
        description: "####",
      },
      {
        id: "2",
        title: "Surface Studio",
        type: "Desktop",
        price: "$3749.99",
        price_sale: "",
        img: "assets/img/products/microsoft-surface-studio.jpg",
        description: "####",
      },
      {
        id: "3",
        title: "Dell Inspion 23",
        type: "Desktop",
        price: "$1987.99",
        price_sale: "",
        img: "assets/img/products/dell-inspiron-23.jpg",
        description: "####",
      },
      {
        id: "4",
        title: "Lenovo IdeaCenter",
        type: "Desktop",
        price: "$2487.99",
        price_sale: "",
        img: "assets/img/products/lenovo-ideacenter.jpg",
        description: "####",
      },
      {
        id: "5",
        category_id: "2",
        title: "Lenovo Yoga 900",
        type: "Hybrid",
        price: "$1899.99",
        price_sale: "",
        img: "assets/img/products/lenovo-yoga.jpg",
        description: "####",
      },
      {
        id: "6",
        title: "Microsoft Surface Pro",
        type: "Hybrid",
        price: "$2099.99",
        price_sale: "$2499.99",
        img: "assets/img/products/surface-pro.jpg",
        description: "####",
      },
      {
        id: "7",
        title: "HP Spectre x360",
        type: "Hybrid",
        price: "$2994.99",
        price_sale: "",
        img: "assets/img/products/hp-spectre-x360.jpg",
        description: "####",
      },
      {
        id: "8",
        title: "Dell Inspiron 7000",
        type: "Laptop",
        price: "$1994.99",
        price_sale: "",
        img: "assets/img/products/dell-inspiron-2in1.jpg",
        description: "####",
      },
      {
        id: "9",
        title: "iPad Air",
        type: "Tablets",
        price: "$449.99",
        price_sale: "",
        img: "assets/img/products/ipad-air.jpg",
        description: "####",
      },
      {
        id: "10",
        title: "iPad Mini",
        type: "Tablets",
        price: "$399.99",
        price_sale: "",
        img: "assets/img/products/ipad-mini.jpg",
        description: "####",
      },
      {
        id: "11",
        title: "Mi Pad 2",
        type: "Tablets",
        price: "$199.99",
        price_sale: "$249.99",
        img: "assets/img/products/mi-pad-2.jpg",
        description: "####",
      },
      {
        id: "12",
        title: "ASUS Transformer",
        type: "Hybrid",
        price: "$199.99",
        price_sale: "",
        img: "assets/img/products/asus-transformer.jpg",
        description: "####",
      },
    ],
  };
  render() {
    const { products } = this.state;
    return (
      <DataContext.Provider value={{products}}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
