import tkinter as tk
from tkinter import Tk, Text
from tkinter import *
import os
from pathlib import Path

startText = 'Welcome to the SPSS software.\nPress "Generate" to generate the CSS.'
def generate():
    os.chdir(Path().absolute())
    os.startfile("gen.bat")
win = tk.Tk()
win.title('SPSS')
#win.resizable(False, False)
win.iconbitmap("SPSS.ico")
win.configure(bg='darkgray')

image = PhotoImage(file="./SPSS.PNG")
img = Label(win, image=image)
img.pack()
Label(win.master,
              text=startText,
  
              # Changing font-size here
              font=("Arial", 25),

              bg='darkgray'
              ).pack()
can = Canvas(win, bg = 'red', height=100, width=100)
#text.place(relx=0.5, rely=0.5, anchor=CENTER)
button = tk.Button(win, text='Generate', width=15, height=5, background='lightblue', command=generate)
button.pack()
print('Successfully launched the software.')
win.mainloop()