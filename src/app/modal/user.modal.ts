export class user {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  gender!: string;
}

export class cart {
  productId!: string;
  title!: string;
  description!: string;
  price!: number;
  category!: string;
  image!:string;
  quntity: number = 1;
}
