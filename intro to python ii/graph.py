import matplotlib.pyplot as plt
import random
import pandas as pd

# dataframe from data.csv
df = pd.read_csv("data.csv")
print(df['cost'].value_counts())