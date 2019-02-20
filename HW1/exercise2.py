
def mincost1dclustering(X): #X contains n 1 dimensional data points.
	
	X.sort() #sorts the data points in linear time. Can be pigeonhole, counting or randix sort algorithms. 
			 #sorts from smaller elements to bigger ones.  

	COST = mean(sum(data points in the cluster l and adding point i))
	
	for i=0 up to k-1
		group the first k elements into the first cluster. #k-1 since counting starts from 0. 
	
	for i=k up to n
		OPT = min { COST(prev l, i) + OPT(new l, i+1), COST(i, i+k) + OPT(new l, i+k+1) }

	return OPT

			





