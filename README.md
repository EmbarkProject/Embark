# Embark - TIY Design and Python collaboration final project

# This website is located at www.embarkproject.com

# As there is a cap on API calls from Indeed and Glassdoor, there is a chance job listings won't populate.
# If that is the case, return at a later time when the cap has been reset.

These days, changing a career many times is common. But it can be scary, too. With millions of job titles and possibilities, it can even feel like there are too many options. Built by career-changers, Embark! is here to help you decide which direction to take.

Embark! is a tool for career-changers who don’t know where to start.  After registering on the landing page,
a new user will need to login.  From here you'll be redirected to our quiz page, where you can either
take the quiz to populate suggested industries, or you can choose 3 industries from the list on the right
side nav bar.

After getting 3 industry preferences, the user is redirected to our industries page.  This page contains
maps for each industry, showing the ratio of jobs to total jobs for each state.  This is information
that we found useful for a career changer to see which states have the highest share of open jobs.

On the next page there are sliders to rate the importance of different culture values for each company.
These values are then sent through the glassdoor api to filter out companies that don't have ratings
as high or higher than the user input.  This page also has a nav bar where location preferences can
be input, in the format of City, State.  

After putting in the location preferences, the user sees a review of all of the preferences that they
had input.  This is the information that will populate our job list on the next page.

The job list page uses all of the user preferences and runs them through both glassdoor and indeed's
APIs, then gives a list of jobs for each industry at each location, only from companies whose
culture values met or exceeded the culture preferences that the user put in.  Each one of these
job listings links to the indeed posting for that job.

After taking a look at the jobs listings page, the user is directed to a resource page,
which has a 'next step' resource list for each industry on the nav bar, as well as showing the
user what others with their current job title have gone on to do.  The user will be able to use this
information to be able to make more decisions about their path or consider moving forward in their
current career instead of changing industries.

Finally the user reaches the dashboard page, where all of the information that was in the website
is compiled into an easy to navigate page.  From here the user will be able to revisit different parts
of the website, whether to change preferences or take a look at different industries.

This website was a final project for The Iron Yard course that was pitched by Lina Breslav, and assigned to Sanchith Kuttappa and John Bower.  The About page includes information on our process and production as well as listing
the languages and packages we needed to use to put the project together.
