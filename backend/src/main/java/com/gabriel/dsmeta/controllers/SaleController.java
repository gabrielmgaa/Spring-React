package com.gabriel.dsmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gabriel.dsmeta.entities.Sale;
import com.gabriel.dsmeta.services.SaleServices;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleServices service;
	
	@GetMapping
	public List<Sale> findSales(){
		return service.findSales();
	}

}
