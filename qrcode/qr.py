# Importing library
import qrcode
 
# Data to be encoded
data = 'ctechinteractives.pro'
 
# Encoding data using make() function
img = qrcode.make(data)
 
# Saving as an image file
img.save('Home.png') 