package com.vanderleiks.backend.repositories;

import com.vanderleiks.backend.entities.Seller;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {
    
}
