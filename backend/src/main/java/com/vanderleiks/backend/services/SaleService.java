package com.vanderleiks.backend.services;

import com.vanderleiks.backend.dto.SaleDTO;
import com.vanderleiks.backend.repositories.SaleRepository;
import com.vanderleiks.backend.repositories.SellerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;
    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable) {
        sellerRepository.findAll();
        return saleRepository.findAll(pageable).map(sale -> new SaleDTO(sale));
    }
}
