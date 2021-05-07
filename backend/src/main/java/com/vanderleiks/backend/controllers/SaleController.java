package com.vanderleiks.backend.controllers;

import com.vanderleiks.backend.dto.SaleDTO;
import com.vanderleiks.backend.services.SaleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sales")
public class SaleController {

    @Autowired
    private SaleService saleService;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findPageable(
        @RequestParam(name = "page", defaultValue = "0") int page,
        @RequestParam(name = "size", defaultValue = "10") int size,
        @RequestParam(name = "sort", defaultValue = "DESC") String sort,
        @RequestParam(name = "orderBy", defaultValue = "date") String orderBy
    ){
        Pageable pageable = PageRequest.of(page, size, Direction.valueOf(sort), orderBy);
        return ResponseEntity.ok(saleService.findAll(pageable));
    }
    

    
    
}
