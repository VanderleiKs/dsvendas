package com.vanderleiks.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import com.vanderleiks.backend.dto.SellerDTO;
import com.vanderleiks.backend.entities.Seller;
import com.vanderleiks.backend.repositories.SellerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class SellerService {
    
    @Autowired
    SellerRepository sellerRepository;

    public List<SellerDTO> findAll(){
        return sellerRepository.findAll().stream().map(seller -> new SellerDTO(seller))
            .collect(Collectors.toList());
    }

}
