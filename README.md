# Q-test
A cms test project for the Q front-end excersize.

## My solution
With the information supplied about the role and as the excersize includes extra points for GraphQL I've decide to implement the following basic stack and structure:

* Front End
    * React (With SSR and Relay)
    * GraphQL
* Back End
    * Node/Express
    * Data (json mocks)

I've chosen the above structure to represent a "real world" scenario and separation of concerns e.g. Front End & Back End temas.

I've also chosen to include SSR (Server Side Rendering) as the task is a CMS and therefore I would expect would need good SEO capabilities as well as other bennefits of better screen reader (accessability) capabilities and not ignoring users with JS turned off :-).

## Method

As the supplied cmsData.json is pretty basic, I've decided to implement it as a single "posts" API endpoint returning a posts object, this in the realword would probably be very different (one giant posts object would be crazy), however for the sake of the assesment it will do. The back-end API will persist the storgae into a db.json file, with the choice to seed on start from the originally supplied json file or to simply start and stop the server using the persisted db.json file.

I will then use GraphQl as a middle layer to query and mutate the posts object in to more efficent types for the front end. There are a few choices for warapping graphQl in react (Appolo and Relay) however my understanding of the Q stack, Relay is used. I am however keen on keeping SSR functional so will probably elect to use Relay Modern as I believe this has better support.

I'm a little confused, as I was told there is redux and relay in the stack, which unless are used for different state management domains (data vs application) does not make sense. As I started to try and put Redux, Relay and GraphQL and SSR together I realised this was going to make things to complicated and even though I'd started the application with redux decided to refactor with Relay in Redux's place.

## Dependencies

This app has been built on node v11.1.0 and not tested on anything lower.






