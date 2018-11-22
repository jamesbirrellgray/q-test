# Q-test
A cms test project for the Q front-end excersize.

## My solution
With the information supplied about the role and as the excersize includes extra points for GraphQL I've decide to implement the following basic stack and structure:

* Front End  (localhost:3000)
    * React (With SSR, Relay)
* Graph API (localhost:4000)
    * GraphQl API 
* Back End (localhost:5000)
    * Node/Express
    * Data (json mocks)

I've chosen the above structure to represent a "real world" scenario and separation of concerns e.g. Front End & Back End teams with the GraphQl layer being used as a middleware.

I've also chosen to include SSR (Server Side Rendering) as the task is a CMS and therefore I would expect would need good SEO capabilities as well as other bennefits of better accessability. 


## Dependencies

This app has been built on node v11.1.0 and not tested on anything lower.

## Usage



## Method and notes for assesor

As the supplied cmsData.json is pretty basic, I decided to implement it as a single "posts" API endpoint returning a posts object, this in the realword would probably be very different (one giant posts object would be crazy), however for the sake of the assesment it will do. The back-end API will persist the storgae into a db.json file, with the choice to seed on start from the originally supplied json file or to simply start and stop the server using the persisted db.json file.

I will then use GraphQl as a middle layer to query and mutate the posts object in to more efficent types for the front end. There are a few choices for warapping graphQl in react (Appolo and Relay) however my understanding of the Q stack, Relay is used. I am however keen on keeping SSR functional so will probably elect to use Relay Modern as I believe this has better support.






