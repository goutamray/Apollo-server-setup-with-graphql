
export const typeDefs = `#graphql 

 type Developer{
   id : ID!,
   name : String,
   age : Int,
   location : String,
   email : String,
 }

 type Product{
   id : ID!,
   title : String,
   desc : String,
   order : Int,

 }

 type Query{
    developers : [Developer]
    deverloper(id : ID!) : Developer
    products : [Product]
 }

`




