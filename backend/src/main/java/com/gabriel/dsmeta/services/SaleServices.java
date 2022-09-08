package com.gabriel.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gabriel.dsmeta.entities.Sale;
import com.gabriel.dsmeta.repository.SalesRepository;

@Service
public class SaleServices {
	
	@Autowired
	private SalesRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
	}

}
