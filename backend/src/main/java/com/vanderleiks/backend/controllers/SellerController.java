package com.vanderleiks.backend.controllers;

import java.util.List;

import com.vanderleiks.backend.dto.SellerDTO;
import com.vanderleiks.backend.services.SellerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sellers")
public class SellerController {

    @Autowired
    private SellerService sellerService;

    @GetMapping
    public ResponseEntity<List<SellerDTO>> findAll(){
        return ResponseEntity.ok().body(sellerService.findAll());
    }
    
}
