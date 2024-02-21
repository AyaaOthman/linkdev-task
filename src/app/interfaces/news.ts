export interface News {
  id: string;
  title: string;
  content: string;
  categoryID: string;
  urlToImage: string;
  description: string;
  publishedDate: string;
  showOnHomepage: string;
}
export interface Category {
  id: number;
  name: string;
}
