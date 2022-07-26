import matplotlib.pyplot as plt
import numpy as np
px = 1/plt.rcParams['figure.dpi']
plt.subplots(figsize=(890*px,150*px))
x = np.linspace(0,10,1000)
y = np.exp(-0.1*x)*np.cos(6*x)
ax = plt.gca()
plt.plot(x,y)
plt.plot(x, np.exp(-0.1*x))
ax.axes.xaxis.set_ticklabels([])
ax.axes.yaxis.set_ticklabels([])
ax.set_facecolor('gold')
plt.xlim(0,10)
plt.tight_layout()
plt.show()
