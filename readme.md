###### Admin
----------
### T
##### [demo]()

Install:

    $ git clone https://github.com/anjenram/Admin-UI.git
    
lnstall packages npm:

    $ npm install
      
Build and run  local server:

    $ gulp

Server runing:

    localhost:8011

##### **Сarefully**:

> *An* ***Error:*** `Second parameter should be an instance of Marionette.AppRouter` *may occur in the* **marionette-routes-helper**
>
>*fix it:*
>  *find in* ***node_modules*** *folder* ***marionette-routes-helper***
> *go to*	***marionette-routes-helper/lib/marionette-routes-helper.js***
> *Find and remove this*
> `    if (!router || !(router instanceof Marionette.AppRouter)) {
         throw new Error('Second parameter should be an instance of Marionette.AppRouter');
        } 
      `
