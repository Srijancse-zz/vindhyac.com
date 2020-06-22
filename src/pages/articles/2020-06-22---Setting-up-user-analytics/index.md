---
title: Setting up user analytics - For a consumer app
date: "2020-06-22T12:37:54Z"
layout: post
draft: false
path: "/posts/setting-up-user-analytics/"
category: "Product"
tags:
  - "Product Management"
  description: "Is this your first time setting up your user analytics for your product, I got you covered."
---
Before you set up user analytics, I think its necessary to understand why you must set something up that is comprehensive enough. Of course, you know you have to set it up, but how much should you track is always questionable for an app. My best bet is track as much as you can at launch, drop events as you progress & can see that a particular action is filling too much cognitive load for you or a data load on the system you are using. 

The stack I have used as of now & I am familiar with is mentioned below, I don’t know if they are the best, but just the once I have not had many issues with. 

1. Amplitude- also has a neat package for startups. 
2. Fabric ( now Firebase)  - for crashes and build updates.
3.  AppsFlyer -  for attribution, although we didn't utilize this much 
4. Clevertap - for notifications
5. Firebase - for A/B tests.
6. Google Analytics - Some high-level data

I think GA & firebase give you aggregated data & not user level - Maybe you can pass a userID but I am unsure of this! I used it mainly for just to understand the app universe as a whole. I also personally think, that if you have to hack your way into getting user data, then maybe at the scale it doesn’t work? Happy to change my mind here & discuss if someone has a different experience. 

***Note:** *When you are tracking notifications for an Indian audience predominantly with Chinese OEM’s you should really speak to the players in this space - MoEngage, WebEngage, CleverTap, etc. and see how they solve for this before you choose one, it is a critical piece in the ecosystem & half-baked data analytics won’t give you the full picture!*

**Ok - so what should I track?**
Firstly, make a spec sheet, there are many ways to do this, here is my[ sample sheet.](https://docs.google.com/spreadsheets/d/1nWmyQyJ7wjnYS44B7zNwb7YQMggoYeKzm0pUM_kRjao/edit?usp=sharing) Below is an explanation of what it consists of:

1. Events
2. Event properties (Parameter) 
3. Property description
4. Notes
5. Data type
6. Example value
7. Comments/Notes 

**Events**

Any interaction you have withing your app is track-able to an event in your app. . Eg - click, tap, scroll are interactions. “Clicking on a video” - is an event. This was led by the interaction - Click. Events also is a BIG umbrella, it should capture the essence of the action, but not minute details. 

*Eg : **Clicking on a video** - is an event that can occur from homepage, profilepage, discoverypage etc. But dont add things like - Clicking video from homepage, clicking video from profilepage.* 

Try and merge as many events as possible for your own sanity & if the product analytics you end up using charges you for per event(unlikely!) but something to look out for. 

**Event properties**

Think of these as giving more context about the data. Properties help you bucket the users into cohort, within the same event action. Think of event properties as questions you would like to ask & get answered within the scope of your analytics. 


*Eg: Clicking on a video will have more properties associated like, the **source** the button was clicked from, the **mobile OS** it was clicked from, **City(** if you are tracking location & generating location-specific content)* 

**But, wait - Would we not want to know something like mobile OS all the time? Why just one event?** Yes, you are right! We would. These are called **Super properties** & you have to explicitly set them & discuss with your developer as to how many super properties you would want to set. Don’t overdo it, though. Think about what exactly are the properties that you want to track. Also remember, some of these are auto given by the platform you choose, so make sure to check with the solution you use as well. 

**User properties**

So while event properties give you more context about events, you need more info at a user level to understand them better. Usually, user properties are an aggregation or an increment counter for an event the user does. You want to make sure also, on how you are tracking user properties. Imagine if you recorded all the clicks a user does on your app, what good does that data give you? In my view, nothing. But, maybe in your ad-based app, this is all you optimize for, random click. So make sure you know what exactly needs to be seen at the user level. 

*Eg: Clicking on video, at a user level you want to know,* **total video length** *watched,* **no.of videos watched***, is a user on a paid plan etc.**

***Property description**

Anyone that reads your spreadsheet must absolutely understand what each event does, write in length what each event means, even if you think it is self-explanatory

. **Notes -** **Elaborated version/ What does it do**

Some properties have developers thinking when exactly should they trigger this event, is it at the click, is it after the page loads, is it as soon as something happens or after a ten-second delay. Use this space to elaborate on this aspect of your choices

**Comments**

Try and add a commentary if necessary to explain why an event exists or special things you changed in code to get this data, if it was a workaround etc. 

There are many more fields that you can keep adding, but I think for the beginning this will do! 

**Naming your events**

Here is how I prefer to name them: **click_video_btn** **-** *what_thing_how*, basically do a verb_noun version of what you are trying to do within the app. Also make sure that you follow some norms, it need not be the same as here, but make sure your team follows this. Like for example here, everything is lower case separated by an underscore & in all the events that is triggered by button we will represent as *‘btn’*. More examples in the[ sample sheet](https://docs.google.com/spreadsheets/d/1nWmyQyJ7wjnYS44B7zNwb7YQMggoYeKzm0pUM_kRjao/edit?usp=sharing), but feel free to make your own rules, just stick with them. 


There is obviously so much you can measure & if you are implementing this for the first time, you might also think all of this is TOO MUCH already. But, remember you cannot learn & understand what your user & product unless you have some insights. Of course don't just be data-driven & forget the real customers you have been talking to especially at 0-1 stage. But, I guess that is a topic for another day. 

If you do things differently at your workplace, do tell me, I would love to know how people do this in their companies, especially since so little material on this exists. :) !
