library("Tmisc")
library("here")
library("skimr")
library("janitor")

library("tidyr")
library("dplyr")
library("palmerpenguins")

library(ggplot2)
library(palmerpenguins)

data(penguins)

data <- penguins %>%
  drop_na()

# png("mygraphic.png", width=1000, height=1000, units="px", pointsize=12, res=200, type="cairo")

ggplot(data=data)
  + geom_point(mapping=aes(x=flipper_length_mm, y=body_mass_g, color=species, shape=sex))
  + labs(title="Palmer Penguins: Body Mass vs. Flipper Length")

ggsave("test.png")

# dev.off()
Sys.sleep(1) # Give time to image to be generated and then opened by syste

browseURL("test.png")