export interface Product {
    id: string;
    category: Category;
    name: string;
    desc: string;
    price: string;
    isFeatured: boolean;
    type: Type;
    images: Image[]
};
  
export interface Image {
    id: string;
    url: string;
}
  
export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
};
  
export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
};
  
export interface Type {
    id: string;
    name: string;
};
