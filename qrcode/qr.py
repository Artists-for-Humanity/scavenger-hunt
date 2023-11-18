# Importing library
import qrcode
 
# Data to be encoded
data = 'https://www.ctechinteractives.pro/pages/clue10'
 
# Encoding data using make() function
img = qrcode.make(data)
 
# Saving as an image file
img.save('Clue10.png') 