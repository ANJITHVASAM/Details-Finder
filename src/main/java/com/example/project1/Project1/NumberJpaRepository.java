package com.example.project1.Project1;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NumberJpaRepository extends JpaRepository<Numbers, Integer> {
    Optional<Numbers> findByMobile(String mobile);
}
