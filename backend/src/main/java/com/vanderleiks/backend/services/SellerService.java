package com.vanderleiks.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import com.vanderleiks.backend.dto.SellerDTO;
import com.vanderleiks.backend.repositories.SellerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
public class SellerService {
    
    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true)
    public List<SellerDTO> findAll(){
        return sellerRepository.findAll().stream().map(seller -> new SellerDTO(seller))
            .collect(Collectors.toList());
    }

}
