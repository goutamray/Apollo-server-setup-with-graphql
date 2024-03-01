
import { devs, products } from "../db.js"

export const resolvers = {

  Query : {
    developers(){
      return devs
    },
    deverloper(parent, args, context){
      return devs.find((data) => data.id == args.id) 
    },
    products(){
      return products
    }
  }
}














