import requests
from bs4 import BeautifulSoup

# Fetching the given url data and saving the contents of the response to the given path
def fetchAndSave(url,path):
	r = requests.get(url)
	with open (path, "w") as f:
		f.write(r.text)

# Query to be searched
query = "coding"

# Given URL
url = f"https://www.youtube.com/results?search_query={query}"

# Spliting the given url and getting the top level domain from the url
token=url.split('https://')[1].split('/')[0]
top_level=token.split('.')[-2]+'.'+token.split('.')[-1]

# fetchAndSave(url, f"data/{top_level}")

with open(f"data/{top_level}","r") as f:
	html_doc = f.read()

soup = BeautifulSoup(html_doc, 'html.parser')
# print(soup.div)

# for link in soup.find_all("a"):
# 	print(link.get("href"))

# s = soup.find_all(class_="video-title")

# for link in soup.find_all(class_="ytd-video-renderer"):
	# print(link)

# print(s)