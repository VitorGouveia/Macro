library("Tmisc")
library("here")
library("skimr")
library("janitor")

library("tidyr")
library("dplyr")
library("palmerpenguins")
library("ggplot2")

penguins %>%
  drop_na() %>%
  group_by(species) %>%
  summarize(mean(body_mass_g))