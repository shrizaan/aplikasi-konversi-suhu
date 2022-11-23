if ($scale == "celcius") 
		{
			 print "<table><tr><th> Conversion Results</th></tr><tr><td>$degree</td><td>celsius</td></tr>"; 
			 $c_2_f = $degree*9/5+32; 
			 print "<tr><td>$c_2_f</td><td>fahrenheit</td></tr>"; 
			 $c_2_k = $degree+273.15; 
			 print "<tr><td>$c_2_k </td><td>kelvin</td></tr>"; 
			 $c_2_r = $c_2_f+459.6; 
			 print "<tr><td>$c_2_r</td><td>rankine</td></tr></table>";} 

		if ($scale == "fahrenheit") 
		{
			 print "<table border><tr><th colspan=2> Conversion Results</th></tr><tr><td>$degree</td><td>farhenheit</td></tr>"; 
			 $f_2_c = ($degree -32)*5/9; 
			 print "<tr><td>$f_2_c</td><td>celsius</td></tr>"; 
			 $f_2_k = $f_2_c+273.15; 
			 print "<tr><td>$f_2_k </td><td>kelvin</td></tr>"; 
			 $f_2_r = $degree+459.6; 
			 print "<tr><td>$f_2_r</td><td>rankine</td></tr></table>";
		} 
		 
		 if ($scale == "kelvin") 
		{
			 print "<table border><tr><th colspan=2> Conversion Results</th></tr><tr><td> 
			 $degree</td><td>kelvin</td></tr>"; 
			 $k_2_f = ($degree - 273.15) * 9 / 5 + 32; 
			 print "<tr><td>$k_2_f</td><td>fahrenheit</td></tr>"; 
			 $k_2_c = $degree-273.15; 
			 print "<tr><td>$k_2_c </td><td>celsius</td></tr>"; 
			 $k_2_r = $k_2_f+459.6; 
			 print "<tr><td>$k_2_r</td><td>rankine</td></tr></table>";
		} 