import { Category, SubCategory, Template } from "../data/types";

export const getExampleUrl = (
  category: Category,
  subCategory: SubCategory,
  template: Template
) => {
  return `/blocks/${category.id}/${subCategory.id}/${template.filename}`;
};
