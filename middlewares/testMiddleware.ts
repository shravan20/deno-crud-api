/**
 * Simple Example middleware, which simply consoles request details 
 */

import  { Request, Response, Next } from "https://deno.land/x/snowlight/mod.ts";


 export default async (req: Request, res: Response, next: Next) => {

    console.log('======Testing Middleware======');    
    console.log('HTTP Method :: '+req.method); 
    console.log('Base Url :: '+req.url);
    console.log('Path :: '+req.path);
    console.log('Search :: '+req.search);
    console.log('Params; optional :: '+req.params);
    console.log('Body; optional :: '+req.body);
    console.log('=============================');
    next();

 }