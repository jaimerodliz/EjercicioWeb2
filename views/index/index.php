<div class="container">
	<div class="row">
		<div class="col-md-12">
			<center><h1>Ejercicio #2</h1></center>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<center><h4>Determina si el primer número  es divisible entre el segundo</h4></center>
		</div>
	</div>
	<div class="row top_margin">
		<div class="col-md-12">
			<div class="col-md-4">
				<div class="input-group">
					<span class="input-group-addon"><i class="glyphicon glyphicon-log-in"></i></span>
					<input id="inp_num1" name="inp_num1" type="number" class="form-control" placeholder="Número 1" >
				</div>
				<br/>
				<div class="input-group top_margin">
					<span class="input-group-addon"><i class="glyphicon glyphicon-log-in"></i></span>
					<input id="inp_num2" name="inp_num2" type="number" class="form-control" placeholder="Número 2" >
				</div>
				<br/>
				<button type="button" class="btn btn-success btn-lg top_margin" id="btn_calcular"> <i class="glyphicon glyphicon-ok"></i> Calcular</button>
				<button type="button" class="btn btn-danger btn-lg top_margin" id="btn_limpiar"> <i class="glyphicon glyphicon-remove-sign"></i> Limpiar</button>
				<br/>
			</div>
			
			<div class="col-md-8">
				<table class='table table-bordered hide' id="tabla_resuldado">
					<thead>
						<tr>
							<th>Resultado</th>
							<th>Residuo</th>
						</tr>
					</thead>
					<tbody id="tbody_resultado">
					</tbody>
				</table>
			</div>
		</div>
	</div>

</div>
