##BarChart
```down
var numbers = [10,20,15,30]
```
{{data}}

```down
viz.barChart(data)
```

##Triangles
```down
var length = [12, 34, 1]
var angle = [90, 45, 45]

viz.triangle(length, 1) //data, rendering type
viz.triangle(angle, 2)
```

##Fraction

### Pie Chart
```down
var portion = [1,2,4,1]

viz.pieChart(portion, sum(portion))
```
### Block fraction
```
viz.blocks(portion, sum(portion))
```
##Texture Pattern
```down
var data = [2, 3, 10, 4]
var type = ['line', 'concave', 'convex', '...', ]

viz.bar(data, type)
